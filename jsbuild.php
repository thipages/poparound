<?php

use thipages\jsbuild\JSBuild;

require('./vendor/autoload.php');
//JSBuild::writeBuildModel();
(new JSBuild())->writeBuild();