<?php include "inc.header.php"; ?>
				
				<!-- Horizontal-menu -->
				<div class="horizontal-main hor-menu clearfix">
					<div class="horizontal-mainwrapper container clearfix">
						<nav class="horizontalMenu clearfix">
							<ul class="horizontalMenu-list">
								<li aria-haspopup="true"><a href="#" class="sub-icon"><i class="fa fa-dashboard"></i> Overview <i class="fa fa-angle-down horizontal-icon"></i></a>
									<ul class="sub-menu">
										<li aria-haspopup="true" class="home"><a class="home" href="home<?php echo $ext?>">Summary</a></li>
										<li aria-haspopup="true" class="home"><a class="home" href="home2<?php echo $ext?>">Dash Pusat</a></li>
										<li aria-haspopup="true" class="home"><a class="home" href="home3<?php echo $ext?>">Dash Polda</a></li>
										<li aria-haspopup="true" class="home"><a class="home" href="home4<?php echo $ext?>">Dash Polres</a></li>
									</ul>
								</li>
								<li aria-haspopup="true"><a href="#" class="sub-icon"><i class="fa fa-user-secret"></i> Personnel <i class="fa fa-angle-down horizontal-icon"></i></a>
									<ul class="sub-menu">
										<li aria-haspopup="true"><a href="r1<?php echo $ext?>">Kegiatan</a></li>
										<li aria-haspopup="true"><a href="r2<?php echo $ext?>">Profil</a></li>
										<li aria-haspopup="true"><a href="r3<?php echo $ext?>">Mutasi</a></li>
										<li aria-haspopup="true"><a href="r4<?php echo $ext?>">Promosi</a></li>
										<li aria-haspopup="true"><a href="r4<?php echo $ext?>">Sertifikasi</a></li>
									</ul>
								</li>
								<li aria-haspopup="true"><a href="#" class="sub-icon"><i class="fa fa-file-text-o"></i> Reports <i class="fa fa-angle-down horizontal-icon"></i></a>
									<ul class="sub-menu">
										<li aria-haspopup="true"><a href="r1<?php echo $ext?>">Report 1</a></li>
										<li aria-haspopup="true"><a href="r2<?php echo $ext?>">Report 2</a></li>
										<li aria-haspopup="true"><a href="r3<?php echo $ext?>">Report 3</a></li>
										<li aria-haspopup="true"><a href="r4<?php echo $ext?>">Report 4</a></li>
									</ul>
								</li>
	<?php if($s_LVL<2){ ?>
								<li aria-haspopup="true"><a href="#" class="sub-icon"><i class="fa fa-cogs"></i> Setup <i class="fa fa-angle-down horizontal-icon"></i></a>
									<ul class="sub-menu">
			<?php if($s_LVL==0){ ?>
										<!--li aria-haspopup="true"><a href="m_user<?php echo $ext?>">User</a></li-->
			<?php }?>
										<li aria-haspopup="true"><a href="m_wil<?php echo $ext?>">Wilayah</a></li>
										<li aria-haspopup="true"><a href="m_sat<?php echo $ext?>">Satwil</a></li>
										<li aria-haspopup="true"><a href="m_unit<?php echo $ext?>">Unit</a></li>
										<li aria-haspopup="true"><a href="m_dg<?php echo $ext?>">Dasar Giat</a></li>
									</ul>
								</li>
	<?php }?>
							</ul>
						</nav>
						<!--Nav end -->
					</div>
				</div>
				<!-- Horizontal-menu end -->
