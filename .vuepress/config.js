//docs/.vuepress/config.js
module.exports = {
    title: '高校de导航',
    Base:'gaoxiao',
    description: '分享各类高校信息',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
      sidebar: [
        {
          title: '按省份查询',
          children: ['/高校资源/高校资源' ],
          title: '高校资源',
          children: ['/高校资源/高校资源' ],
          initialOpenGroupIndex: 1 // 可选的, 默认值是 0
        }
      ]
    },
  };
  