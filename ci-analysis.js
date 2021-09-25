const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'https://sonarcloud.io',
  options: {
    'sonar.organization': 'hexdump95',
    'sonar.projectKey': 'hexdump95_msa-posts-express',
    'sonar.sources': 'src',
    'sonar.tests': 'test',
    'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    'sonar.testExecutionReportPaths': 'test-report.xml'
  }
}, () => { });
