pipeline { 

    environment { 

        registry = "gits5622/boda_orda" 

        registryCredential = 'Dockerhub' 

        dockerImage = '' 

    }

    agent any 

    stages { 

        stage('Cloning our Git') { 

            steps { 

              checkout scm

            }

        } 

        stage('Building our image') { 

            steps { 

                    dockerImage = docker.build registry + ":$BUILD_NUMBER" 

            } 

        }

        stage('Deploy our image') { 

            steps { 

                script { 

                    docker.withRegistry( '', registryCredential ) { 

                        dockerImage.push() 

                    }

                } 

            }

        } 

        stage('Cleaning up') { 

            steps { 

                sh "docker rmi $registry:$BUILD_NUMBER" 

            }

        } 

    }
}