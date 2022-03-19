// import type { GatsbyNode } from "gatsby"
import { CreateWebpackConfigArgs } from "gatsby"
import { resolve } from "path"

const aliases = {
  "@/containers": resolve("src/containers"),
  "@/components": resolve("src/components"),
  "@/templates": resolve("src/templates"),
  "@/images": resolve("src/images"),
  "@/layout": resolve("src/containers/layout"),
  "@/hooks": resolve("src/hooks"),
  "@/types": resolve("src/types"),
  "@/contexts": resolve("src/contexts"),
  "@/styled": resolve("./stitches.config.js"),
}

export const onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: aliases,
    },
  })
}
