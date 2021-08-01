import argparse
import json
import pandas as pd
from shapely.geometry import shape, Polygon, MultiPolygon, Point
from timeit import default_timer as timer


cli = argparse.ArgumentParser(description="Transform CTA L Train stop data.")
cli.add_argument("--input_file", help="File path to read CTA L Train stop data from.")
cli.add_argument("--area_file", help="File path to read area data from.")
cli.add_argument("--output_file", help="File path to write results to.")
args = cli.parse_args()

start = timer()

# Read file
df = pd.read_csv(args.input_file)
df_areas = pd.read_csv(args.area_file)

records = df.to_dict(orient = 'records')
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
    my_point = Point([long, lat])
    
    for area_num, mp in area_multipolygons:
        if mp.contains(my_point): 
            return area_num
        
    return None

df['area_number'] = [ get_community_area(x['longitude'], x['latitude']) for x in records]

# Write output
df.to_csv(args.output_file, index=False)

# Show summary
end = timer()
secs = end - start
print(f"Transformed and wrote {len(df)} records in {secs:.1f} secs.")

