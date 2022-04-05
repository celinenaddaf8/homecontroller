const handlelogin = (credentials,setSubmitting) =>{
        const url= "" 
        axios
        .post(url,credentials)
        .then((response)=>{
          const result = response.data();
          const {message,status,data} = result;

          if (status !='SUCESS'){
            handleMessage(message,status);
          }else{
            navigation.navigate('FirstPage',{...data[0]});
          }
          setSubmitting(false);
        })
        .catch(error =>{
          console.log(error.JSON());
          setSubmitting(false)
          handleMessage('An error occured. Check your network and try again.')
        });
    const handleMessage = (message, type = 'FAILED') => {
      setmessage(message);
      setmessageType(type);
    }}