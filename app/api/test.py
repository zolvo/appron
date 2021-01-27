@chef_routes.route('/<int:id>/appointment', methods=['POST'])
def post_appointment(id):
    form = AppointmentForm()
    data = request.get_json()
    y, m, d, h, minute, sec = request.json["date"].split("-")
    new_date = datetime.datetime(int(y), int(m), int(d), int(h), int(minute), int(sec))
    new_appointment = Appointment(
        user_id = data["user_id"],
        chef_id = data["chef_id"],
        notes= form.data['notes'],
        date= new_date)

    db.session.add(new_appointment)
    db.session.commit()

    return new_appointment.to_dict()
