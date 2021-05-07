import Server from './server'
import { Toast } from 'antd-mobile';

const initPage = {
  current: 1,
  pageSize: 10,
}

class API extends Server {
  /**
   * @todo 批量操作
   * @param params
   * @method DELETE
   * @return {promise}
   */
  async updateRecruits(params = {}) {
    try {
      let result = await this.axios('PATCH', `/updateRecruits`, params)
      Toast.info('操作成功', 1)
      return result.data
    } catch (err) {
      throw err
    }
  }
  /**
   * @todo 广告列表
   * @param params
   * @method GET
   * @return {promise}
   */
  async advtgList(params = {}) {
    try {
      let result = await this.axios('GET', `/advtgList`, { ...initPage, ...params })
      return result
    } catch (err) {
      throw err
    }
  }
}

export default new API()
