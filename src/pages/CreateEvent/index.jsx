import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ваша логика для отправки данных формы
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Название мероприятия"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          fullWidth
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="event-type-label">Тип мероприятия</InputLabel>
          <Select
            labelId="event-type-label"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          >
            <MenuItem value="конференция">Конференция</MenuItem>
            <MenuItem value="воркшоп">Воркшоп</MenuItem>
            <MenuItem value="встреча">Встреча</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Дата мероприятия"
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button variant="contained" color="primary" type="submit">
          Создать мероприятие
        </Button>
      </form>
    </Container>
  );
};

export default CreateEvent;