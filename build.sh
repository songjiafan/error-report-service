#!/bin/bash

basedir=`dirname $0`
cd $basedir     || exit 1
mkdir -p release/ || exit 1

for file in `ls -a $basedir`
do
  if [ $file == "." ] ||  [ $file == ".." ] || [ $file == "release" ] || [ $file == ".git" ];then
    continue;
  fi
  cp -r $file release/ || exit 1
done;

project_path=${1}

if [ "${project_path}" == "cop.inke_owt.bpc_pdl.opd_servicegroup.opd_service.admin_job.dsp-prod_cluster.ali-test" ]; then
  cd  release/config && rm -rf params.php && ln -s params_local.php params.php
elif [ "${project_path}" == "cop.inke_owt.bpc_pdl.opd_servicegroup.opd_service.admin_job.dsp-prod_cluster.ali-gray" ]; then
  cd  release/config && rm -rf params.php && ln -s params_local.php params.php
else
  cd  rrelease/config && rm -rf params.php && ln -s params_local.php params.php
fi
