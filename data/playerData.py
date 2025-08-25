
import os
import pandas as pd
import json

data_folder = os.path.join(os.path.dirname(__file__), 'archive')
csv_files = [f for f in os.listdir(data_folder) if f.endswith('.csv')]

dataframes = {}
for file in csv_files:
    file_path = os.path.join(data_folder, file)
    df = pd.read_csv(file_path)
    dataframes[file] = df


# Export Basic_Stats.csv to JSON for React frontend
if 'Basic_Stats.csv' in dataframes:
    df = dataframes['Basic_Stats.csv'].fillna("")  # Replace NaN with empty string
    # Only include active players (not retired)
    if 'Status' in df.columns:
        df = df[df['Current Status'].str.lower() != 'Retired']
    players_data = df.to_dict(orient='records')
    output_path = os.path.join(os.path.dirname(__file__), '../dashboard/json/players.json')
    with open(output_path, 'w') as f:
        json.dump(players_data, f)