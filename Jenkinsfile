pipeline{
    agent any
     environment { 

        registry = "gits5622/boda_orda" 

        registryCredential = 'gits5622' 

        dockerImage = '' 

    }
    stages{
        stage("Clone repository"){
            steps{
                echo "Cloning repository"
                git 'https://github.com/gitx5622/boda_orda.git'

            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
         stage("Build"){
            steps{
                echo "Building the application"
                script { 
                    dockerImage = docker.build registry + ":$BUILD_NUMBER" 
                }
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
         stage("Test"){
            steps{
                echo "Testing using Selenium"
               
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
         stage("Deploy"){
            steps{
                echo "Deploying the application"

            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
    }
    post{
        always{
            echo "========always========"
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}