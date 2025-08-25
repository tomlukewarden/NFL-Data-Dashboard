import os
import pandas as pd
import kagglehub
from kagglehub import KaggleDatasetAdapter

data_folder = "data/archive"
csv_files = [f for f in os.listdir(data_folder) if f.endswith('.csv')]

dataframes = {}
for file in csv_files:
    file_path = os.path.join(data_folder, file)
    df = pd.read_csv(file_path)
    dataframes[file] = df  # Store each DataFrame with its filename as key

# Example: print the first 5 rows of each DataFrame
for name, df in dataframes.items():
    print(f"{name}:")
    print(df.head())

file_path = "../archive/Basic_Stats.csv" 

df = kagglehub.load_dataset(
    KaggleDatasetAdapter.PANDAS,
    "kendallgillies/nflstatistics",
    file_path,
)

print("First 5 records:", df.head())