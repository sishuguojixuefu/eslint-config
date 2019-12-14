<!-- 选择部门 -->
<template>
  <el-dialog :visible.sync="selfVisible" append-to-body top="10vh" width="565px">
    <div slot="title" class="title">选择部门</div>
    <div class="hulk-flex-center w100">
      <div class="left_modal">
        <div>选择：</div>
        <div class="modal_panel">
          <el-input v-model="filterText" size="small" prefix-icon="el-icon-search" placeholder="输入关键字"></el-input>
          <el-tree
            ref="tree"
            :data="depList"
            :props="defaultProps"
            :expand-on-click-node="true"
            :default-expand-all="false"
            :default-expanded-keys="[depList[0] ? depList[0].id : '']"
            :filter-node-method="filterNode"
            highlight-current
            node-key="id"
            icon-class="none"
          >
            <div slot-scope="{ node, data }" class="modal_item hulk-flex-between" @click.self.stop>
              <div class="hulk-flex-start hulk-item-noshrink" @click.stop="nodeClick(data)">
                <i :class="`iconfont ${data.type === 1 ? 'iconbianzufuzhi' : 'iconjuxingfuzhi'}`" style="color:#AEE4FA;" />
                <span :style="{ 'margin-left': '10px' }">{{ data.name }}</span>
              </div>
              <div v-if="data.children.length" class="modal_item_next hulk-flex-end hulk-item-noshrink">
                <span style="margin-right:5px;color:#E4E4E4;">|</span>
                <i class="iconfont iconbianzufuzhi7" style="color:#17AAFF;"></i>
                <span>下级</span>
              </div>
            </div>
          </el-tree>
        </div>
      </div>
      <div>
        <div>已选：</div>
        <div class="modal_panel right_modal">
          <div v-for="(checkItem, index) in checkedDeps" :key="checkItem.id" class="hulk-flex-between right_item">
            <div class="hulk-flex-start">
              <i :class="`iconfont ${checkItem.type === 1 ? 'iconbianzufuzhi' : 'iconjuxingfuzhi'}`" style="color:#AEE4FA;" />
              <span style="margin-left:10px;">{{ checkItem.name }}</span>
            </div>
            <Icon type="ios-close-circle-outline" class="close" color="#CACACA" @click="removeCheck(index)" />
          </div>
        </div>
      </div>
    </div>
    <span slot="footer" class="hulk-flex-end">
      <el-button size="mini" style="width:80px;" type="primary" @click="ok">确 定</el-button>
      <el-button size="mini" style="width:80px;margin-right:10px;" @click="cancel">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
import RoleFunConfig from 'src/axios/BackstageAxios/RoleFunConfig'
import RulesConfig from 'src/axios/workAxios/RulesConfig'
import { cloneDeep } from 'lodash'

import PersonAvatar from './PersonAvatar'

export default {
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'name',
      },
      selfVisible: false,
      depList: [],
      checkedDeps: [],
      filterText: '',
      max: 0,
      orgId: '',
    }
  },
  props: {
    type: {
      type: String,
      default: 'backstage', // backstage后台调用,'work'工作台调用
    },
  },
  methods: {
    // 显示modal 第一个参数为已选择的部门,第二个值为子机构id
    async openDialog(value = [], orgId = '', max = 0) {
      this.selfVisible = true
      this.checkedDeps = [...value]
      this.filterText = ''
      this.max = max
      await this.getDeps(orgId)
    },
    filterNode(value, data) {
      if (!value) return true
      return data.name.indexOf(value) !== -1
    },
    nodeClick(data) {
      if (this.max > 1 && this.checkedDeps.length === this.max) {
        this.$message.info(`最多选择${this.max}个部门`)
        return
      }

      if (this.checkedDeps.some(item => item.id === data.id)) return
      const org = {
        id: data.id,
        name: data.name,
        type: data.type,
      }
      if (this.max === 1) {
        this.checkedDeps = [org]
        return
      }
      this.checkedDeps.push(org)
    },

    removeCheck(index) {
      this.checkedDeps.splice(index, 1)
    },
    // 点击确定返回数据
    ok() {
      this.selfVisible = false
      this.$emit('chooseData', cloneDeep(this.checkedDeps))
    },
    cancel() {
      this.selfVisible = false
    },
    async getDeps(orgId) {
      let result = []
      try {
        if (this.type === 'work') {
          result = await RulesConfig.ORG_CURRENT_TREE(orgId)
        } else {
          result = await RoleFunConfig.ORG_CURRENT_TREE(orgId)
        }
        console.log(result)
        this.depList = [result]
      } catch (err) {
        console.log(err)
      }
    },
  },
  created() {},
  components: {
    // PersonAvatar
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    },
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
@import 'src/style/common/_flex.scss';
@import 'src/style/common/mixin.scss';

* {
  box-sizing: border-box;
  font-size: 13px;
}
.left_modal {
  margin-right: 20px;
}
.right_modal {
  overflow: auto;
  @include chatting-scroll-bar();
}
.title {
  background: #f2f6fd;
  height: 35px;
  line-height: 35px;
  padding: 0 20px;
}

.modal_panel {
  width: 250px;
  height: 300px;
  padding: 10px 20px;
  background: #f4f7f9;
  border: 1px solid #dedede;
  margin-top: 5px;
  .node_transparent {
    opacity: 0.4;
  }
  .scroll_name {
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      background: #f0f0f0;
    }
  }
  .el-tree {
    background: transparent;
    width: 100%;
    height: 234px;
    overflow: auto;
    user-select: none;
    margin-top: 10px;
    @include chatting-scroll-bar;
  }
  .modal_item {
    height: 100%;
    min-width: 100%;
    &:hover {
      background: #f0f0f0;
    }
    .modal_item_next {
      cursor: pointer;
      color: #e4e4e4;
      span {
        color: #17aaff;
      }
      .ivu-icon {
        margin-right: 3px;
        margin-left: 3px;
      }
    }
  }

  .right_item {
    min-height: 32px;
    &:hover {
      background: #f0f0f0;
    }
  }
}
.close {
  cursor: pointer;
  font-size: 14px;
}
/deep/.el-dialog__header {
  padding: 0;
}
/deep/.el-tree-node__expand-icon {
  width: 0;
  padding: 0;
}
/deep/.el-tree-node > .el-tree-node__children {
  min-width: 100%;
  width: min-content;
}
/deep/.el-dialog__headerbtn {
  top: 5px;
  right: 15px;
}
/deep/.el-dialog__body {
  padding: 15px 20px;
}
/deep/.el-dialog__footer {
  padding-top: 0;
}
</style>
