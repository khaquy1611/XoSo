import React , { useState , useEffect }  from 'react'
import MasterLayout from '../components/Layout';
import { Row , Col ,  notification } from 'antd';
import Swal from 'sweetalert2';
import styles from '../pages/css/SignUp.module.css';
function SignUp() {
  const [validate , setValidate ] = useState({
    name: '',
    phone: "",
    passWord: '',
    passWordConfirm: '',
  });
  const [errors , setErrors] = useState({
    name: '',
    phone: "",
    passWord: '',
    passWordConfirm: '',
  });

  const handleChangeValue = (e) => {
    let { name, value, type } = e.target;
    let newValues = {...validate , [name] : value};
    let newErrors = {...errors};

    if(value.trim() === "") {
        newErrors[name] = name + " is required ";
    }else {
        newErrors[name] = "";
    }
    if (name === 'passWordConfirm') {
        if(value === newValues['passWord']){
            newErrors[name] = '';
        }else {
            newErrors[name] = name + ' is invalid ';
        }
    }
    setValidate(newValues);
    setErrors(newErrors);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      let valid = true;
      let SignUpContent = '';
      let errorsContent = '';
      for (let key in validate) {
        if (validate[key] === '') {
            valid = false;
            errorsContent += `
            <p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
            valid = false;
        }

        SignUpContent += `
            <p class="text-left"> <b>${key}:</b> ${validate[key]}</p>
        `
    }

    for (let key in errors) {
        if (errors[key] !== '') {
            errorsContent += `
            <p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
            valid = false;
        }


    }

    if(!valid) {
        Swal.fire({
            title: 'Your profile!',
            html: errorsContent,
            icon: 'error', //success, error, warning, question
            confirmButtonText: 'OK'
        })
        console.log("thất bại");
        return;
       
    }
    console.log("thành công");
    // alert('Thành công!')
    Swal.fire({
        title: 'Your profile!',
        html: SignUpContent,
        icon: 'success', //success, error, warning, question
        confirmButtonText: 'OK'
    })
  }
  return (
    <MasterLayout>
        <Row className={styles.main}>
        <div className={styles.containerSignUp}>
        <h3 className={styles.text}>ĐĂNG KÍ TÀI KHOẢN</h3>
            <form onSubmit = {(e) => handleSubmit(e) } method ="POST" action="" className={styles.form}>
            <input type="hidden" name="_token" value="" />
                <span>Lưu ý: Vui lòng ấn vào <span style={{ color: "red" }}>Đăng Nhâp</span> nếu bạn đã đăng kí tài khoản trước đó, Liên hệ chat, admin để được hỗ trợ nếu quên mật khẩu!</span>
            <div className={styles.row}>
                <div className={styles.col4}>
                    <label>Họ Tên</label>
                </div>
                <div className={styles.col7}>
                    <input type="text" name="name" id="name" value={validate.name} onChange={(e)=> handleChangeValue(e)} require />
                    <span className={styles.textDanger}>{errors.name}</span>
                </div> 
               
            </div>
            <p>Viết đúng tên phải giống với tên trên thẻ ngân hàng của bạn!</p>
            <div className={styles.row}>
                <div className={styles.col4}>
                    <label>Số Điện Thoại</label>
                </div>
                <div className={styles.col7}>
                    <input type="text" name="phone" id="phone"  value={validate.phone} onChange={(e)=> handleChangeValue(e)} require autofocus/>
                    <span className={styles.textDanger}>{errors.phone}</span>
                </div> 
               
            </div>
            <p>Vui lòng nhập đúng số của bạn để tiện giao dịch và xác minh</p>
            <div className={styles.row}>
                <div className={styles.col4}>
                    <label>Mật Khẩu</label>
                </div>
                <div className={styles.col7}>
                    <input type="password" name="password" id="password" onChange={(e)=> handleChangeValue(e)}  value={validate.password} require autofocus />
                    <span className={styles.textDanger}>{errors.password}</span>
                </div> 
               
            </div>
            <p>Vui lòng nhập đúng số của bạn để tiện giao dịch và xác minh & phải 6 ký tự trở lên!</p>
            <div className={styles.row}>
                <div className={styles.col4}>
                    <label>Nhập lại m.khẩu trên</label>
                </div>
                <div className={styles.col7}>
                    <input type="password" name="confirmPassWord" onChange={(e)=> handleChangeValue(e)} value={validate.confirmPassWord}  id="confirmPassWord"  require />
                    <span className={styles.textDanger}>{errors.confirmPassWord}</span>
                </div> 
               
            </div>
            <button  className={styles.btn} type="danger" shape="round" size="large" >Tạo Tài Khoản</button>
            </form>
        </div>
        </Row>
    </MasterLayout>
  )
}

export default React.memo(SignUp);