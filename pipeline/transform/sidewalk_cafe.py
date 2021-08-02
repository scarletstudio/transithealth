import sys
sys.path.append("./")

import argparse
import pandas as pd
import numpy as np
import json
from timeit import default_timer as timer
from shapely.geometry import shape, Polygon, MultiPolygon, Point
from utils.data import extract_data_portal_dates

cli = argparse.ArgumentParser(description="Transform sidewalk cafe permit data.")
cli.add_argument("--area_file", help="File to transform area number to community name.")
cli.add_argument("--input_file", help="File path to read sidewalk cafe permit data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()


#Read data
raw_df = pd.read_csv(args.input_file)
df_areas = pd.read_csv(args.area_file)

records = raw_df.to_dict(orient = 'records')
area_records = df_areas.to_dict(orient = 'records')


#Get multipolygon for each community area
area_multipolygons = [
    (
        area['area_number'], 
        MultiPolygon(shape(json.loads(area['geometry'])))
    ) 
    for area in area_records
]

def get_community_area(long, lat):
    
    if long is None or lat is None: 
        return None
    else:
         my_point = Point([long, lat])
    
    for area_num, mp in area_multipolygons:
        if mp.contains(my_point): 
            return area_num
    
    return None

raw_df['area_number'] = [ get_community_area(x['longitude'], x['latitude']) for x in records]

#Parse dates
df = extract_data_portal_dates(raw_df, col="issued_date")
#If expiration date is null this will fail
#df = extract_data_portal_dates(df, col="expiration_date")



""" We will comeback to this as extended assignments
#Drop lat lon columns (too many null)
df.drop([
    "latitude",
    "longitude",
], axis=1, inplace=True)

#Create new column "exists". Assign 0 for expired permits, 1 for existing permits
today = date.today().strftime("%Y-%m-%d")
df['exists'] = np.where( (df['issued_date'] < today ) & (today < df['expiration_date']), 1, 0)
df.head()

#Convert zip_code type from int64 to string
df['zip_code']= df['zip_code'].astype(str)

#Convert ZIP to community area 
df["zip"]=df["zip_code"]
df_zip_to_area = pd.read_csv(args.zip_to_area_file)
df = convert_zip_to_community_area_proportionally(
    df_zip_to_area,
    df,
    cols_to_convert=["exists"],
    zip_col="zip",
    verbose=True
)

#Add community area names based on area numbers
df_area_to_name = pd.read_csv(args.area_to_name)[['area_number', 'name']]
df['area'] = df['area'].astype(str)
df_area_to_name['area_number'] = df_area_to_name['area_number'].astype(str)

df.set_index(['area'], inplace=True)
df_area_to_name.set_index(['area_number'], inplace=True)
df = df.join(df_area_to_name)
df.reset_index()

#Rename column "name" to "community_area"
df = df.rename(columns={'name': 'community_area'})"""

#Output
df.to_csv(args.output_file, index=False)

#Summary
end = timer()
secs = end - start
print(f"Transformed {len(df):,d} records in {secs:.1f} secs.")