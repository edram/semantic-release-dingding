const ChatBot = require('dingtalk-robot-sender');

async function success(pluginConfig, context) {
  const {nextRelease} = context;
  const {webhook,accessToken} = pluginConfig;
  const robot = new ChatBot({
    webhook,
    accessToken,
  });

  const subTitle = pluginConfig.title? pluginConfig.title:'';
  const title = `🎉${subTitle} ${nextRelease.name} 发布成功`;

  const mdTitle =  `# ${title}\n`

  await robot.markdown(title, mdTitle + nextRelease.notes);
}


module.exports = {
  success,
};
