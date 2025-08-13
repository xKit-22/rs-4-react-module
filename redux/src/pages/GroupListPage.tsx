import React, {memo} from 'react';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {useAppSelector} from "src/redux/hooks";

export const GroupListPage = memo(() => {
  const groupContactsState = useAppSelector(state => state.group.data);
  return (
    <Row xxl={4}>
      {groupContactsState[0].map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
