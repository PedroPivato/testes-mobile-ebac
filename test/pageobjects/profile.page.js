const { $ } = require('@wdio/globals');

class ProfilePage{
        async profileName (name){
          return await $(`//android.widget.TextView[@text="${name}"]`)
        }
}
module.exports = new ProfilePage();
