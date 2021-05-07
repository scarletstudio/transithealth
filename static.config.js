import path from "path"
import fs from "fs"

export default {
  getSiteData: () => ({
    title: "TransitHealth"
  }),
  getRoutes: async () => {

    const communityAreas = JSON.parse(fs.readFileSync(
      "./public/resources/chicago_community_areas.geojson"
    ));

    return [
      {
        path: '/',
        getData: () => ({
          communityAreas
        }),
      },
    ]
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
  ],
}
