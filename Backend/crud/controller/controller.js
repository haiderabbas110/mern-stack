import { itemsDB } from '../model/items.js'

const create = (req, res) => {
    const item = new itemsDB({
        name: req.body.item,
        color: req.body.color,
        brand: req.body.brand
    })

    item.save(item).then(data => {
        res.send(data)
    });

}

const update = (req, res) => {
    const id = req.params.id;
    itemsDB.findByIdAndUpdate(id, req.body).
        then(data => {
            res.send(data);
        });

}

export { create, update }