import Mock from 'mockjs'

export function getScrollTableData() {
  // 返回的数据
  const mockData = Mock.mock({
    "data|20": [{
      "id|+1": 1,
      "code|+1": 1,
      "isUrgentName|1": ["是","否"],
      "gdStatusName|1": ['待受理', '待接收'],
      "deptName": "@cname",
      "items": "xxxx",
      "palce": "@cname",
      "remarks": "xxxx",
      "distributeTime": "@datetime",
      "userName": "@ctitle(10)"
    }]
  });

  return {
    url: "/sys/data",
    type: "get",
    data: {
      'msg': 'success',
      'code': 0,
      'list': mockData
    },
  }
}
export function f1(){
  console.log('多模块测试');
}