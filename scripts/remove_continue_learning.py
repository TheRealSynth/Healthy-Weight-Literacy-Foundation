#!/usr/bin/env python3
"""
Remove 'Continue Learning' sections from blog article SQL files.
"""
import re
from pathlib import Path

# Use absolute paths
script_dir = Path('/vercel/share/v0-project/scripts')
sql_files = [
    script_dir / '009_seed_glp1_education_articles.sql',
    script_dir / '010_seed_telehealth_education_articles.sql',
    script_dir / '011_seed_metabolic_health_articles.sql',
    script_dir / '012_seed_nutrition_literacy_articles.sql',
]

# Pattern to match Continue Learning section
# From "> ## Continue Learning" to the line before "## Sources"
pattern = r'> ## Continue Learning\s*\n\s*\n(?:.*?\n)*?\s*\n(?=## Sources)'

for sql_file in sql_files:
    if not sql_file.exists():
        print(f"Skipping {sql_file.name} - file not found")
        continue
        
    print(f"Processing {sql_file.name}...")
    
    # Read the file
    with open(sql_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count occurrences before removal
    matches = re.findall(pattern, content, re.MULTILINE)
    count = len(matches)
    
    # Remove all Continue Learning sections
    new_content = re.sub(pattern, '', content, flags=re.MULTILINE)
    
    # Write back
    with open(sql_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"  Removed {count} 'Continue Learning' section(s)")

print("\nDone! All 'Continue Learning' sections have been removed.")
