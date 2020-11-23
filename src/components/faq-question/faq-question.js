import React from 'react'

import styles from './faq-question.module.css'

export default ({ faqQuestion }) => (
  <> 
  {faqQuestion.question},
  {faqQuestion.answer.answer}
  </>
)