pipeline {
    agent any

    environment {
        PORT = 80
        NETWORK = "mf-net"

        IMAGE_NAME = 'mf-payments-img'
        CONT_NAME = 'mf-payments'
    }

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}  .'
            }
        }
        stage('Run') {
            steps {
                sh 'docker rm -f ${CONT_NAME}'
                sh 'docker run -d \
                    --name ${CONT_NAME} \
                    --net ${NETWORK} \
                    ${IMAGE_NAME}' 
            }
        }
    }
}
