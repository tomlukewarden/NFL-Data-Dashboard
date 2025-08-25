
import os
import pandas as pd

data_folder = os.path.join(os.path.dirname(__file__), 'archive')
csv_files = [f for f in os.listdir(data_folder) if f.endswith('.csv')]

dataframes = {}
for file in csv_files:
    file_path = os.path.join(data_folder, file)
    df = pd.read_csv(file_path)
    dataframes[file] = df

# Print the first 5 rows of each DataFrame
for name, df in dataframes.items():
    print(f"{name}:")
    print(df.head())