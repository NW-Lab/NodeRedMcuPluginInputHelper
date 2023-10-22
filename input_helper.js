module.exports = function(RED) {
    // ...
    RED.plugins.registerPlugin("node-red-mcu-plugin-input-helper", {
//        type: "sample-runtime-plugin-type",
        onadd: function() {
          // プラグインが登録されるときに実行される
          RED.log.info("TEST");
        },
        onremove: function() {
          // プラグインが登録解除される時に実行される
        },
//        settings: {
//          // $HOME/.node-red/settings.js から読み込む設定項目と、エディタ側に公開するかのフラグ
//          sampleSetting: { value: "sample", exportable: true }  
//        }
    });
}
