import React,{Fragment} from "react"
import { Table, Header } from "semantic-ui-react"

const ClaimsList:React.FC=()=>{


    return(
<Fragment>
    <Header>Claims List</Header>
        <Table size="large">
<Table.Header>
          <Table.Row>
            <Table.HeaderCell>Claim ID</Table.HeaderCell>
            <Table.HeaderCell>Claim Type</Table.HeaderCell>
            <Table.HeaderCell>Ammount</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1234</Table.Cell>
            <Table.Cell>Merchant</Table.Cell>
            <Table.Cell>$100.00</Table.Cell>
            <Table.Cell>Created</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>1235</Table.Cell>
            <Table.Cell>Merchant</Table.Cell>
            <Table.Cell>$100.00</Table.Cell>
            <Table.Cell>Created</Table.Cell>
          </Table.Row>
        </Table.Body>
        </Table>
        </Fragment>
    )
}

export default ClaimsList;