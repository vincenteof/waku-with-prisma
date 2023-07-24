import { prisma } from '../utils/prisma.js'

export function PrismaTest() {
  console.log('prisma.user.promise: ', prisma.user.findMany())
  return <div>PrismaTest</div>
}
