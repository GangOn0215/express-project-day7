module.exports = {
  customerList: `select * from nodejs_project`,
  customerInsert: `insert into nodejs_project set ?`,
  customerUpdate: `update nodejs_project set ? where id=?`,
  customerDelete: `delete from nodejs_project where id=?`
}