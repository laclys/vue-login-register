window.onload = function () {
    var vue = new Vue({
        el: '.container_box',
        data: {
            username: '',
            psd1: '',
            psd2: '',
            num_check: ''
        },
        methods: {
            //click event
            register: function () {
                if (!(this.username || this.psd1 || this.psd2 || this.num_check)) {
                    alert('每一项都要填(⊙o⊙)');
                    return;
                }
                if (this.num_check != "FIYI") {
                    alert('验证码错误(~へ~)φ');
                    return;
                }
                if (this.psd1 == this.psd2) {
                    this.$http.get('/regi', {
                        params: {
                            username: this.username,
                            password: this.psd1
                        }
                    }).then(function (res) {
                        // console.log(res);
                        if (!res.data.error) {
                            console.log('注册成功');
                        } else {
                            console.log(res.data.message);
                        }
                    }, function () {
                        console.log('网络连接失败');
                    });
                } else {
                    alert('请保证两次输入的密码一致密码');
                }
            }
        }
    });
};