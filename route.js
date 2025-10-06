export async function POST(req){
  const body = await req.json()
  return new Response(JSON.stringify({status:'ok',data:body}), {status:200, headers:{'Content-Type':'application/json'}})
}
