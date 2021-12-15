new Vue({
    el: '#app',
    data: {
        value_1: '',
        value_2: '',
        host_1: '',
        host_2: '',
        params: {},
        needDecode: false
    },
    methods: {
        confirm () {
            let { params: params_1, host: host_1 } = this.formatParams(this.value_1, 'value_1');
            let { params: params_2, host: host_2 } = this.formatParams(this.value_2, 'value_2', params_1);
            this.params = params_2;
            this.host_1 = host_1;
            this.host_2 = host_2;
        },
        formatParams (val = '', name = '', init = {}) {
            let valueArr = val.split('?');
            let host = valueArr[0];
            let params = init;
            if (valueArr[1]) {
                let paramsArr = valueArr[1].split('&');
                paramsArr.forEach((item) => {
                    let itemArr = item.split('=');
                    if (itemArr[0]) {
                        if (!params[itemArr[0]]) {
                            params[itemArr[0]] = {};
                        }
                        if (name) {
                            params[itemArr[0]][name] = itemArr[1];
                        }
                    }
            
                })
            }
            return { params, host };
        },
        getUrlParams () {
            let { params } = this.formatParams(window.location.href, 'value');
            if (params.url && params.url.value) {
                this.value_1 = decodeURIComponent(params.url.value);
                this.confirm();
            }
        }
    },
    created () {
        this.getUrlParams();
    }
})