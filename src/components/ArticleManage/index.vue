<template>
  <Table stripe :columns="columns" :data="data">
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">修改</Button>
      <Button type="error" size="small" @click="remove(index)">删除</Button>
    </template>
  </Table>
</template>
<script>
export default {
  name: 'ArticleManage',
  data () {
    return {
      columns: [
          {
              title: '标题',
              key: 'name'
          },
          {
              title: '类型',
              key: 'age'
          },
          {
              title: '更新时间',
              key: 'address'
          },
          {
              title: '操作',
              key: 'option',
              slot: 'action',
              align: 'center'
          }
      ],
      data: [
          {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
          },
          {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
          },
          {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
          },
          {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
          }
      ]
    }
  }
}
</script>
