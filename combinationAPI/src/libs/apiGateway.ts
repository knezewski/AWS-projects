export const formatJSONResponse = ({
  statusCode = 200,
  data = {},
}: {
  statusCode?: number
  data?: any
}) => {
  return {
    statusCode,
    body: JSON.stringify(data),
  }
}
