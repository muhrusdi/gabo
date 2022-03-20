import React from "react"
import { ApolloProvider } from "@apollo/client"
import { QueryClient, QueryClientProvider } from "react-query"
import { client } from "../../apollo/client"
import { getCssText } from "@/styled"

type Props = {
  element: React.ReactNode
  props: any
}

type RenderBodyProps = {
  setHeadComponents?: any
}

const queryClient = new QueryClient()

export const wrapRootElement: React.FC<Props> = ({ element }) => (
  <QueryClientProvider client={queryClient}>
    <ApolloProvider client={client}>{element}</ApolloProvider>
     {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
)

// export const wrapPageElement: React.FC<Props> = ({ element, props }) => (
//   <Layout {...props}>{element}</Layout>
// )


export const onRenderBody = ({ setHeadComponents }: RenderBodyProps): any => {
  setHeadComponents([
    <style
      key="stitches"
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ])
}
