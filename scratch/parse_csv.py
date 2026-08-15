import re, json

with open("scratch/raw_data.csv", "r", encoding="utf-8") as f:
    text = f.read()

blocks = text.split("--- CLASS ")
class_data = {}

for block in blocks[1:]:
    lines = block.strip().split("\n")
    class_num = lines[0].split()[0].strip()
    class_data[class_num] = {}
    
    for line in lines[1:]:
        line = line.strip()
        if not line or line.startswith("subject,") or line.startswith("---"):
            continue
        parts = line.split(",")
        if len(parts) < 4:
            continue
        subj, cat, unit, url = parts[0].strip(), parts[1].strip(), parts[2].strip(), parts[3].strip()
        
        # Standardize subject key
        subj_key = subj.lower()
        if subj_key == "maths":
            subj_key = "mathematics"
            
        if subj_key not in class_data[class_num]:
            class_data[class_num][subj_key] = {}
            
        if cat not in class_data[class_num][subj_key]:
            class_data[class_num][subj_key][cat] = {}
            
        class_data[class_num][subj_key][cat][unit] = url

print("Parsed Data Summary:")
total_qps = 0
total_aks = 0
total_orals = 0
total_oral_keys = 0
total_units = set()

for c, subjs in class_data.items():
    print(f"\nClass {c}:")
    for s, cats in subjs.items():
        qps = cats.get("question_paper", {})
        aks = cats.get("written_answer_key", {})
        orals = cats.get("oral_sheet", {})
        okeys = cats.get("oral_answer_key", {})
        print(f"  {s.capitalize()}: QPs={len(qps)} (units: {sorted(list(qps.keys()), key=lambda x: int(x) if x.isdigit() else 99)}), Written AKs={len(aks)} ({list(aks.keys())}), Orals={len(orals)}")
        
        for u in qps.keys():
            total_units.add(f"C{c}_{s}_{u}")
        total_qps += len(qps)
        total_aks += len(aks)
        total_orals += len(orals)
        total_oral_keys += len(okeys)

print("\nTOTAL STATS:")
print(f"Classes: {len(class_data)}")
print(f"Total Unique Units with QPs: {len(total_units)}")
print(f"Total Model QPs: {total_qps}")
print(f"Total Written Answer Keys: {total_aks}")
print(f"Total Oral Sheets: {total_orals}")
print(f"Total Oral Keys: {total_oral_keys}")

with open("scratch/parsed_data.json", "w", encoding="utf-8") as out:
    json.dump(class_data, out, indent=2)
