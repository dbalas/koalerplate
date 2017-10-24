
function hello (ctx) {
  let user = ctx.request.query.user
  ctx.ok({ user })
}

module.exports = {
  hello
}
