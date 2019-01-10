function add_post() {

    // let myToast;

    function error(XMLHttpRequest, textStatus, errorThrown) {
        // 通常情况下textStatus和errorThown只有其中一个有值
        // myToast.update({
        //     heading: 'Error',
        //     text: '请求出错了',
        //     icon: 'error',
        //     hideAfter: true,
        //     allowToastClose: true,
        // });
        toastr.remove()
        alert('出现未知异常 '+ errorThrown+ '可以使用开发者模式查看改请求add-post的reponse确认出错信息')
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "0",
            "hideDuration": "0",
            "timeOut": "0",
            "extendedTimeOut": "0",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr.error('请求出错了')
    }

    function beforeSend() {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": true,
            "progressBar": false,
            "positionClass": "toast-top-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "0",
            "hideDuration": "0",
            "timeOut": "0",
            "extendedTimeOut": "0",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        toastr.info('正在导入数据中,请耐心等待,不要离开当前页面，如果文章太多，将会需要很长一段时间，。。。')
        // myToast = $.toast({
        //     heading: 'Information',
        //     text: '正在导入数据中',
        //     allowToastClose: false,
        //     hideAfter: false,
        // });
    }

    function complete(XMLHttpRequest, textStatus) {

    }

    function callback(msg) {
        toastr.remove()
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "0",
            "hideDuration": "0",
            "timeOut": "0",
            "extendedTimeOut": "0",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
        if (msg.code === 1) {
            toastr.success('导入成功：' + msg.msg)
            // myToast.update({
            //     heading: 'Success',
            //     text: '导入成功',
            //     icon: 'success',
            //     hideAfter: true,
            //     allowToastClose: true,
            // });
        } else {
            toastr.error('发生了错误:' + msg.msg)
            // myToast.update({
            //     heading: 'Error',
            //     text: '发生了错误:' + msg.msg,
            //     icon: 'error',
            //     hideAfter: true,
            //     allowToastClose: true,
            // });
        }
    }

    $.ajax(
        {
            type: "GET",//通常会用到两种：GET,POST。默认是：GET
            url: "../add-post",//(默认: 当前页地址) 发送请求的地址
            dataType: "json",//预期服务器返回的数据类型。
            beforeSend: beforeSend, //发送请求
            success: callback, //请求成功
            error: error,//请求出错
            complete: complete//请求完成
        });
}


