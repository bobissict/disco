import axios from 'axios';

const webhookURL = 'https://hooks.slack.com/services/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';


export const sendMessage = payload => (
  new Promise((resolve, reject) => {
    axios.post(webhookURL, JSON.stringify(payload))
      .then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(new Error('something bad happened', error));
      });
  })
);