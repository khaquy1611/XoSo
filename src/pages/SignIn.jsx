import React, { useState, useEffect } from "react";
import MasterLayout from "../components/Layout";
import { Row , Col ,  notification } from 'antd';
import Swal from 'sweetalert2';
import styles from '../pages/css/SignIn.module.css';
import { Link } from 'react-router-dom';
function SignIn() {
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
        <h3 className={styles.text}>ĐĂNG NHẬP</h3>
            <form onSubmit = {(e) => handleSubmit(e) } method ="POST" action="" className={styles.form}>
            <input type="hidden" name="_token" value="" />
                <span>Liên hệ Admin ở góc phải bên dưới để được hỗ trợ nếu quên mật khẩu!</span>
            <div className={styles.row}>
                <div className={styles.col4}>
                    <label>Số ĐT/Nick</label>
                </div>
                <div className={styles.col7}>
                    <input type="text" name="name" id="name" value={validate.name} onChange={(e)=> handleChangeValue(e)} require />
                    <span className={styles.textDanger}>{errors.name}</span>
                </div> 
               
            </div>
     
            <div className={styles.row}>
                <div className={styles.col4}>
                    <label>Mật Khẩu</label>
                </div>
                <div className={styles.col7}>
                    <input type="password" name="password" id="password" onChange={(e)=> handleChangeValue(e)}  value={validate.password} require autofocus />
                    <span className={styles.textDanger}>{errors.password}</span>
                </div> 
               
            </div>
            <button  className={styles.btn} type="danger" shape="round" size="large" >Đăng Nhập</button>
            <p className={styles.paraph}>
            <Link to="/reset-password">
            Trường hợp không đăng nhập được có thể do quên mật khẩu liên hệ admin zalo hoặc chat facebook để cấp lại mật khẩu
            </Link>
            </p>
            <p className={styles.paraph}>
            <Link to="/sign-up">
            Đăng Ký
            </Link>
            <span>Tài Khoản Để Sử Dụng</span>
            </p>
            </form>
        </div>
        </Row>
    </MasterLayout>
  );
}

export default React.memo(SignIn);
