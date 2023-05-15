import React from 'react'
import HeadBreadcrumbs from '../breadcrumbs/breadcrumbs'
import { MainContainer } from '../content/content.element'
import BasicTabs from '../Tabs/TabsMain'

function LeadsMain(props) {
  return (
    <>
    <MainContainer active={props.toggle}>
    <HeadBreadcrumbs head="Home" sechead="lead"/>
    <BasicTabs tab1={props.tab1}/>
    </MainContainer>
    </>
  )
}

export default LeadsMain