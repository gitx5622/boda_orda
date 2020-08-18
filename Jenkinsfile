pipeline{
      environment { 

        registry = "gits5622/boda_orda" 

        registryCredential = 'docker-hub' 

        dockerImage = '' 

    }
    
    agent any

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
                sh 'docker build -t gits5622/boda_orda'
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


