import React, {memo, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {ContactDto} from 'src/types/dto/ContactDto';
import {useAppSelector} from "src/redux/hooks";

export const FavoritListPage = memo(() => {
  const contactsState = useAppSelector(state => state.contacts.data);
  const favoriteContactsState = useAppSelector(state => state.favorite.data);
  const [contacts, setContacts] = useState<ContactDto[]>([])
  useEffect(() => {
    setContacts(() => contactsState[0].filter(({id}) => favoriteContactsState[0].includes(id)));
  }, [contactsState, favoriteContactsState])
  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
})
