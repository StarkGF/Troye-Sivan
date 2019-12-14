import React from 'react'
import '../css/myData.scss'
class MyData extends React.Component{
    render() {
        return(
          <div className={'myData'}>
              <table>
                  <tr>
                      <th>关注数</th>
                      <th>粉丝数</th>
                      <th>获赞数</th>
                      <th>播放数</th>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>422.7万</td>
                      <td>1199.9万</td>
                      <td>1.8亿</td>
                  </tr>
              </table>
          </div>
        );
    }
}

export default MyData