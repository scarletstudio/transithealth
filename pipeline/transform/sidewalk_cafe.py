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

#Output
df.to_csv(args.output_file, index=False)

#Summary
end = timer()
secs = end - start
print(f"Transformed {len(df):,d} records in {secs:.1f} secs.")