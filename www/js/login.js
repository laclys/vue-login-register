window.onload = function () {
    var vm = new Vue({
        el: '.container_box',
        data: {
            username: '',
            password: ''
        },
        methods: {
            goIndex() {
                this.$http.get('/login', {
                    params: {
                        username: this.username,
                        password: this.password
                    }
                }).then(function (res) {
                    if (!res.data.error) {
                        // console.log('登陆成功');
                        alert('登陆成功');
                    } else {
                        alert(res.data.message)
                    }
                }, function () {
                    console.log('网络连接失败');
                })
            }
        }
    })
}