exports.Submit = async (session, models, vars) => {
    await session.transform.acmetransferrequests.update('transferform', models.transferform);
    await session.transform.acmetransferrequests.action('transferform', 'Submit');
};
exports.Cancel = async (session, models, vars) => {
    await session.transform.acmetransferrequests.update('transferform', models.transferform);
    await session.transform.acmetransferrequests.action('transferform', 'Cancel');
};
exports.menu = async (session, models, vars) => {
    await session.transform.acmetransferrequests.update('transferform', models.transferform);
    await session.transform.acmetransferrequests.action('transferform', 'menu');
};