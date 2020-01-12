export default {
 create: data => ({
   type: 'POLL.CREATE',
   payload: data
 }),
 reset: () => ({type: 'POLL.RESET'}),
 update: data => ({
   type: 'POLL.UPDATE',
   payload: data
  }),
  vote: data => ({
    type: 'POLL.VOTE',
    payload: data
  })
};
