pipeline{
    agent any

    stages{
        stage('Checkout Code'){
            steps{
                echo 'Cloning HR-API-PW-Automation'
                git branch: 'main',
                credentialsId: '27bb7a4d-f99e-4024-9b83-8cbf25cc9599',
                url: 'https://github.com/Mia1194/hr-api-automation.git'
            }
        }

    }

    stage('Setup Node Environment'){
        steps{
            sh 'npm ci || npm install'
        }
    }
    stage('Install Playwright Browsers'){
        steps{
            sh 'npx playwright install --with-deps'
        }
    }
    stage('Run Api Tests'){
        steps{
            sh 'npx playwright test'
        }
    }
    stage('Archive Reports'){
        steps{
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
    }

    post{
        success { echo 'Build SUCCEDED!! -- All api tests pased. '}
        failure {echo 'Build failed.'}
    }

}