<?php
$redirect=false;
include "inc.common.php";
include 'inc.db.php';

$mnu=post('mnu');
$checklogin=!in_array($mnu,$array_nologin);
if($checklogin){
	include "inc.session.php";
}

include 'inc.sendmail.php';

$code='404';
$ttl='Error';
$msgs='Action not found';

$conn = connect();

$mn=post('mnu',$conn);

if($mn=='register'){
	$upwd=date('sdiHdis');
	$uid=post('nip',$conn);
	$uname=post('nama',$conn);
	$email=post('email',$conn);
	$sqlp=sql_insert("persons","nip,nama,pangkat,jabatan,satwil,unit,email,telp",$conn);
	$sqlu=sql_insert("core_user","uavatar",$conn,"uid,uname,upwd","'$uid','$uname',md5('$upwd')");
	
	$sql="select * from core_user where uid='$uid'";
	$rs=exec_qry($conn,$sql);
	if(fetch_row($rs)){
		$code='201'; $ttl='Failed'; $msgs="ID $uid already registered. Please use forgot password.";
	}else{
		$sql="select * from persons where nip='$uid'";
		$rs=exec_qry($conn,$sql);
		if(fetch_row($rs)){
			$code='202'; $ttl='Failed'; $msgs="Personnel $uid already registered. Please use forgot password.";
		}else{
//new user here	
			$rs=exec_qry($conn,$sqlp);
			if(db_error($conn)==''){
				$rs=exec_qry($conn,$sqlu);
				if(db_error($conn)==''){
					$code='200'; $ttl='Success'; $msgs="ID $uid registered successfully. Please check your email";
					$m = "Hi $uname, terima kasih sudah mendaftar.<br /><br />Password anda adalah $upwd <br /><br /><br />rgds<br />admin";
					if(!send_mail($email,"Manajemen Korlantas",$m)){
						$msg="Registration successfull but failed sending email. Please take a note, your auto generate password is $upwd";
						//$rs=exec_qry($conn,"delete from tm_users where userid='$userid'");
					}
				}else{
					$code='204'; $ttl='Failed'; $msgs="Error creating user";
				}
			}else{
				$code='203'; $ttl='Failed'; $msgs="Error creating personnel data";
			}
		}
	}
	
}
if($mn=="reset"){
		
	$email = $_POST['remail'];
	$uid= $_POST['rnip'];

	$upwd=date('sdiHdis');
	
	$rs=exec_qry($conn,"update core_user set upwd=md5('$upwd') where uid='$uid' and uid in (select nip from persons where email='$email')");
	if(affected_row($conn)>0){
		$m = "Hi,<br /><br />Your new password is $upwd <br /><br /><br />rgds<br />admin";
			if(!send_mail($email,"Manajemen Korlantas",$m)){
				$code='202'; $ttl='Failed'; $msgs="Failed sending email to $email.";
			}else{
				$code='200'; $ttl='Success'; $msgs="Password sent to $email";
			}
	}else{
		$code='201'; $ttl='Failed'; $msgs="Invalid ID/Email";
	}
	
}

if($mn=='passwd'){
	$opwd=post('op',$conn);
	$npwd=post('np',$conn);
	$sql=sql_update("core_user","","uid='$s_ID' and upwd=md5('$opwd')",$conn,"upwd","md5('$npwd')");
	$rs=exec_qry($conn,$sql);
	if(db_error($conn)==''){
		if(affected_row($conn)>0){
			$code='200'; $ttl='Success'; $msgs='Password changed';
		}else{
			$code='204'; $ttl='Failed'; $msgs='Invalid old password';
		}
	}else{
		$code='201'; $ttl='Error'; $msgs="Error accessing data";
		if(!$production){$msgs.=$sql;}
	}
}
if($mn=='user'){
	$passwd=post('pwd');
	$fcols=$passwd==''?'':'upwd';
	$fvals=$passwd==''?"":"md5('$passwd')";
	$res=crud($conn,$fcols,$fvals);
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}
if($mn=='profile'){
	$up=upload_file("favatar","avatars/",$s_ID);
	$avatar=$up[0]&&$up[1]!=''?$up[1]:'';
	$favatar=$avatar==''?'':'uavatar';
	$res=crud($conn,"$favatar","'$avatar'");
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
	if($s_AVATAR==''){
		$_SESSION['s_AVATAR']=$avatar;
	}
}
if($mn=='ravatar'){
	$files=glob("avatars/$s_ID.*");
	if(count($files)>0){
		if(unlink($files[0])){
			$_SESSION['s_AVATAR']='';
			$res=array("200","Success","Picture removed");
		}else{
			$res=array("201","Error","Remove picture failed");
		}
	}else{
		$res=array("201","Error","Picture does not exist");
	}
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}


if($mn=='wil'){
	$res=crud($conn);
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}
if($mn=='satwil'){
	$res=crud($conn);
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}
if($mn=='unit'){
	$res=crud($conn);
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}
if($mn=='dg'){
	$res=crud($conn);
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}

/*
if($mn=='location_batch'){
	$res=batch_input($conn,"locid");
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}
if($mn=='mdevice'){
	$res=crud($conn);
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}
if($mn=='mdevice_batch'){
	$res=batch_input($conn,"host");
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}

if($mn=='ip'){
	$name=post('name');
	$mask=post('subnet');
	$subs = explode("/",$mask);
	if(count($subs)<2){
		$msgs="Wrong format"; $code="201"; $ttl="Error";
	}else{
		if (filter_var($subs[0], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)&&filter_var($subs[1], FILTER_VALIDATE_INT)) {
			$sub = new IPv4\SubnetCalculator($subs[0],$subs[1]);
			$res = $sub->getSubnetArrayReport();
			$s=$res['ip_address_range'][0]; $e=$res['ip_address_range'][1]; $t=$res['number_of_ip_addresses'];
			$res=crud($conn,"ipstart,ipstop,tot","'$s','$e','$t'");
			$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
			
		}else{
			$msgs="Invalid IP"; $code="202"; $ttl="Error";
		}
	}
}


if($mn=='attachment'){
	$up=upload_file("ffile","uploads/");
	$sv=post('sv');
	$fname=$up[0]&&$up[1]!=''?$up[1]:post('fname');
	if($sv=='NEW'){
		$fname=$up[0]&&$up[1]!=''?$up[1]:'';
	}
	$res=crud($conn,"fname,lastupd,updby","'$fname',now(),'$s_ID'");
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}

if($mn=='posting'){
	$paydt=nullpost('paydt');
	$revdt=nullpost('reversedt');
	$res=crud($conn,"paydt,reversedt","$paydt,$revdt");
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}
if($mn=='posting_batch'){
	$res=batch_input($conn,"sapdocid","paydt,reversedt,billdt");
	$code=$res[0]; $ttl=$res[1]; $msgs=$res[2];
}
*/

disconnect($conn);

echo json_encode(array('code'=>$code,'ttl'=>$ttl,'msgs'=>$msgs));
?>